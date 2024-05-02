import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";

import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv')

// Create an instnace of MatchReader and pass in somethinf satisfiying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load()


//console.log(`Man United wins ${manUnitedWins} games`);

new Summary(new WinsAnalysis("Man United"), new ConsoleReport());
