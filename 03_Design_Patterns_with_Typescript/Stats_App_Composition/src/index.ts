import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

// Create an instnace of MatchReader with football.csv
const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

// Create summary instance and build and print report
const summary = Summary.winsAnalysisWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.matches);
