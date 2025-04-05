import { Command } from "commander";

import { bootstrap, workerInit } from "@/cli";

const program = new Command();
program
  .command("runserver")
  .description("Runs the server")
  .option("-p --port <port>", "Port", "8000")
  .option("-H --host <host>", "Host", "::")
  .action(async (options: { host: string; port: string }): Promise<void> => {
    await bootstrap(Number(options.port), options.host);
  });

program
  .command("worker")
  .description("Runs the worker")
  .option("-c --concurrency <concurrency>", "Concurrency", "1")
  .action((options: { concurrency: string }): void => {
    console.info("Starting worker...");
    workerInit(Number(options.concurrency));
  });

program.parse(process.argv);
