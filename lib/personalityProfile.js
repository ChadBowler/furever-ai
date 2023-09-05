// import { Configuration, OpenAIApi } from "openai";
// const configuration = new Configuration({
//     organization: "org-6z8ICCeGAPLg02WeNe11SUXQ",
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

// export async function name(params) {
    
// }

import { OpenAI } from "langchain/llms/openai";
const { PromptTemplate } = require("langchain/prompts");
const { StructuredOutputParser } = require("langchain/output_parsers");

// Creates and stores a wrapper for the OpenAI package along with basic configuration
const model = new OpenAI({ 
    openAIApiKey: process.env.OPENAI_API_KEY, 
    temperature: 0,
    model: 'gpt-3.5-turbo'
  });

// Uses the instantiated OpenAI wrapper, model, and makes a call based on input from user
export async function promptFunc (input) {
    
    try {
        
        // With a `StructuredOutputParser` we can define a schema for the output.
        const parser = StructuredOutputParser.fromNamesAndDescriptions({
            breed: "Breed of suggested animal",
            size: "Size of suggested animal, should be one of the following sizes: small, medium, large, xlarge",
            age: "Age of suggested animal, should be one of the following values: baby, young, adult, senior",
            coat: "Coat type of suggested animal, should be one of the following values: short, medium, long, wire, hairless, curly",
            explanation: "detailed explanation of the suggested animals",
            
        });
        const formatInstructions = parser.getFormatInstructions();
        // Instantiation of a new object called "prompt" using the "PromptTemplate" class
        const prompt = new PromptTemplate({
            template: "You are a pet adoption specialist and will provide the user with suggestions for different pet adoption options.\n{format_instructions}\n{question}",
            inputVariables: ["question"],
            partialVariables: { format_instructions: formatInstructions }
        });
        
        const promptInput = await prompt.format({
            question: input
          });
        const res = await model.call(promptInput);
        // console.log("Parser " + parser.parse(res));
        console.log(await parser.parse(res));
    } catch (err) {
        console.error(err);
    }
  };