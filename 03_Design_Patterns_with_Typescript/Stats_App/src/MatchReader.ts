import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

export type MatchData = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
  data: string[][];
  read(): void;
}

export class MatchReader {
  matches: MatchData[] = []
  reader: DataReader
  constructor(reader: DataReader) {
    this.reader = reader
  }

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult, // 'as' -> Type Assertion
        row[6],
      ];
    });
  }


}
