#!/usr/bin/env node

(async function () {
    const { run } = await import("../dist/index.js")
    await run(process.argv)
})().catch((e) => {
    console.log(e)
    process.exit(1)
})