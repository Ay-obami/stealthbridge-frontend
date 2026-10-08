#!/usr/bin/env node
// Self-contained deployment gate for the public landing. No external accounts,
// credentials, database, RPC network access or staged payment data required.
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";

const PORT = 3198;
const URL = "http://127.0.0.1:" + PORT;
const server = spawn(
  process.execPath,
  ["./node_modules/next/dist/bin/next", "start", "-p", String(PORT), "-H", "127.0.0.1"],
  { env: { ...process.env, STEALTHBRIDGE_SITE_MODE: "landing", STEALTHBRIDGE_API_URL: "" },
    stdio: ["ignore", "pipe", "pipe"] }
);
let log = "";
for (const stream of [server.stdout,server.stderr]) {
  stream.on("data", chunk => { log += chunk.toString().slice(-3000); });
}
async function check(path, expected, test) {
  const response = await fetch(URL+path,{signal:AbortSignal.timeout(10000),redirect:"manual"});
  assert.equal(response.status,expected,path+" unexpected HTTP status");
  if(test) await test(response);
  console.log("PASS landing: "+path+" returned "+expected);
}
try {
  let ready = false;
  for(let attempt=0;attempt<70;attempt++){
    if(server.exitCode !== null)throw new Error("Next.js server exited before checks");
    try {
      const response=await fetch(URL+"/",{signal:AbortSignal.timeout(800)});
      if(response.ok){ready=true;break;}
    }catch{}
    await delay(300);
  }
  assert.ok(ready,"Next.js server did not become ready\n"+log);
  await check("/",200,async response=>{
    const html=await response.text();
    assert.match(html,/StealthBridge/i);
    assert.match(html,/Move value/);
    assert.match(html,/Confidential payments/i);
    assert.doesNotMatch(html,/href="\/business"/,"public homepage must not link to disabled Business route");
    assert.doesNotMatch(html,/href="\/send"/,"public homepage must not link to disabled Send route");
  });
  await check("/brand/stealthbridge-symbol.svg",200);
  for(const path of ["/business","/send","/explorer","/api/bridge/v1/network"]){
    await check(path,404);
  }
  console.log("Landing-ready: no external services or testnet account required.");
} catch(e) {
  console.error("Landing verification failed:",e);
  console.error(log.slice(-6000));
  process.exitCode=1;
} finally {
  server.kill("SIGTERM");
  await delay(300);
  if(server.exitCode===null)server.kill("SIGKILL");
}
