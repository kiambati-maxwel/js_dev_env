import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';
import { json } from 'express';

/* eslint-disable no-console */

process.env.NODE_ENV = 'production';

console.log(chalk.blue("generating minified bundle for production, This might take a while ..."));

webpack(webpackConfig).run((err, stats) =>{
    if(err){
        console.log(chalk.red(err));
        return 1;
    }

    const jsonStats = stats.toJson();

    if(jsonStats.hasEerrors){
        return jsonStats.errors.map(error => {
            console.log(chalk.red(error));
        });
    }

    if (jsonStats.hasWarnings){
        console.log(chalk.yellow("web pack gen --> warnings"));
        json.warnings.map( warning => console.log(chalk.yellow(warning)));
    }

    console.log(`webpack stats ${stats}`);

    // if done
    console.log(chalk.blue('app build for production and written in dist'));


    return 0;
});