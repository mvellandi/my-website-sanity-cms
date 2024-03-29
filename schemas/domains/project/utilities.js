export function entriesUnique(values, _context) {
  // if there are duplicate entries
  const errorMsg = 'Please remove duplicate entries'
  if (values) {
    // if entries are NOT references types
    if (values[0]._type !== 'reference') {
      const entries = values.map((v) => v._type)
      if (new Set(entries).size !== values.length) {
        return errorMsg
      }
    }
    // if entries are reference types
    else if (values[0]._type === 'reference') {
      const refs = values.map((v) => v._ref)
      if (new Set(refs).size !== values.length) {
        return errorMsg
      }
    }
  }
  return true
}
