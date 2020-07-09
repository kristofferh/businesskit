import "@testing-library/jest-dom";
import serializer from "jest-emotion";

expect.addSnapshotSerializer(serializer);
