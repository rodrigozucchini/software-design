/**
 * FACTORY METHOD PATTERN

 * We have data already loaded in memory and we want to export it in different formats (PDF, Excel, CSV).
 * The client should NOT know which concrete class is being used.
 * It should only request an exporter from a factory.
 */

/**
 * Common interface for all exporters.
 * Every exporter must implement the export method.
 */
interface DataExporter {
  export(data: any[]): void;
}


//Responsible only for exporting data as PDF.
class PdfExporter implements DataExporter {
  export(data: any[]): void {
    console.log("Exporting data to PDF...");
    console.log(data);
  }
}

//Responsible only for exporting data as Excel.
class ExcelExporter implements DataExporter {
  export(data: any[]): void {
    console.log("Exporting data to Excel...");
    console.log(data);
  }
}


//Responsible only for exporting data as CSV.
class CsvExporter implements DataExporter {
  export(data: any[]): void {
    console.log("Exporting data to CSV...");
    console.log(data);
  }
}

/**
 * Factory class that contains the Factory Method.
 * This method decides which exporter to create.
 */
class ExporterFactory {
  static createExporter(type: "pdf" | "excel" | "csv"): DataExporter {
    switch (type) {
      case "pdf":
        return new PdfExporter();
      case "excel":
        return new ExcelExporter();
      case "csv":
        return new CsvExporter();
      default:
        throw new Error("Unsupported export type");
    }
  }
}

/**
 * The client code works only with the DataExporter interface.
 * It does NOT know or care about concrete classes.
 */

// Data in memory
const data = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
];

// The client chooses the format
const client1 = ExporterFactory.createExporter("pdf");
const client2 = ExporterFactory.createExporter("excel");

// The client uses the exporter through the interface
client1.export(data);
client2.export(data);
