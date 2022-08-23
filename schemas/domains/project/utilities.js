import { aspectTypes } from "./structureAspect";

export function entriesUnique(values, _context) {
  // if there are duplicate entries
  const errorMsg = "Please remove duplicate entries";
  if (values) {
    // if entries are object types
    if (values[0].type) {
      const types = values.map((v) => v.type);
      if (new Set(types).size !== values.length) {
        return errorMsg;
      }
    }
    // if entries are reference types
    else if (values[0]._ref) {
      const refs = values.map((v) => v._ref);
      if (new Set(refs).size !== values.length) {
        return errorMsg;
      }
    }
  }
  return true;
}

// unfortunately, this function can only be used in structureAspect.js module
export function entriesProvided(values, context) {
  // get the aspect's title based on its name
  const { title } = aspectTypes.find((a) => a.name === context.path.at(-1));
  // if parent type is selected, but has no value
  if (
    (context.parent.type === title && !values) ||
    (Array.isArray(values) && values.length == 0)
  ) {
    return "Aspect(s) must have a value";
  } else {
    return true;
  }
}

// unused function to combine validation functions while providing a closure around function args.
// function buildEntriesValidationRule(validators) {
//   return function validateEntries(Rule) {
//     return Rule.custom((values, context) => {
//       let errorMsg;
//       for (const v of validators) {
//         const error = v({ values, context });
//         if (error) {
//           errorMsg = error;
//           break;
//         }
//       }
//       return errorMsg ? errorMsg : true;
//     });
//   };
// }
