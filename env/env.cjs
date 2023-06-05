/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const fs = require("fs");
const dotEnv = require("dotenv");

// 先构造出.env*文件的绝对路径
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const pathsDotenv = resolveApp("./env/.env");

// 按优先级由高到低的顺序加载.env文件
dotEnv.config({ path: `${pathsDotenv}` });
dotEnv.config({ path: `${pathsDotenv}.${process.env.NODE_ENV}` });
