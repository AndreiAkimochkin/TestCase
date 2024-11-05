import React from 'react';
import Form from '@rjsf/material-ui';
import { JSONSchema7 } from 'json-schema';
import validator from '@rjsf/validator-ajv8';

const schema: JSONSchema7 = {
    type: "object",
    properties: {
        streetAddress: { type: "string", minLength: 1, maxLength: 255 },
        city: { type: "string", minLength: 1, maxLength: 255 },
        state: { type: "string", minLength: 1, maxLength: 255 },
        gender: {
            enum: ["male", "female", "else"],
        },
        phones: {
            type: "array",
            minItems: 1,
            maxItems: 3,
            items: { type: "string", minLength: 1, maxLength: 255 },
        },
        parents: {
            type: "array",
            minItems: 0,
            maxItems: 2,
            items: {
                type: "object",
                properties: {
                    relation: { enum: ["mother", "father"] },
                    age: { type: "integer" },
                    name: { type: "string" },
                    secondName: { type: "string" },
                    grandFather: {
                        type: "object",
                        properties: {
                            name: { type: "string" },
                            age: { type: "integer" },
                            secondName: { type: "string" },
                            retired: { type: "boolean" },
                        },
                    },
                    grandMother: {
                        type: "object",
                        properties: {
                            name: { type: "string" },
                            age: { type: "integer" },
                            secondName: { type: "string" },
                            retired: { type: "boolean" },
                        },
                    },
                },
            },
        },
    },
    required: ["streetAddress", "city", "state"],
};

const JsonSchemaForm: React.FC = () => {
    const handleSubmit = ({ formData }: any) => {
        console.log("Data submitted: ", formData);
    };

    return (
        <div>
            <h1>Application Form</h1>
            <Form schema={schema} onSubmit={handleSubmit} validator={validator} />
        </div>
    );
};

export default JsonSchemaForm;
