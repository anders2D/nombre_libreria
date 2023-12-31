/**
 * API distritiendamj
 * Documentación Api distritiendamj
 *
 * OpenAPI spec version: v1
 * Contact: wilson.199819@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class Personas {
    'id'?: number;
    'nombre': string;
    'apellido': string;
    'telefono': string;
    'correo'?: string | null;
    'tipoPersona'?: PersonasTipoPersonaEnum | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "nombre",
            "baseName": "nombre",
            "type": "string",
            "format": ""
        },
        {
            "name": "apellido",
            "baseName": "apellido",
            "type": "string",
            "format": ""
        },
        {
            "name": "telefono",
            "baseName": "telefono",
            "type": "string",
            "format": ""
        },
        {
            "name": "correo",
            "baseName": "correo",
            "type": "string",
            "format": ""
        },
        {
            "name": "tipoPersona",
            "baseName": "tipo_persona",
            "type": "PersonasTipoPersonaEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Personas.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PersonasTipoPersonaEnum {
    Cliente = 'cliente',
    Proveedor = 'proveedor'
}

