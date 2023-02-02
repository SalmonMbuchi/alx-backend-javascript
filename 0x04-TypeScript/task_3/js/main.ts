/// <reference path="crud.d.ts"/>
import { deleteRow, insertRow, updateRow } from './crud';
import {RowID, RowElement} from './interface';
import * as CRUD from 'crud.js';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
}
CRUD.insertRow(row);

const newRowID: RowID = insertRow(row);
const updatedRow: RowElement = {...row, age: 23};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);