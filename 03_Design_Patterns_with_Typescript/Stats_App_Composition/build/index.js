"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// Create an instnace of MatchReader with football.csv
const matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
// Create summary instance and build and print report
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.matches);
