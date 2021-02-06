// Format name

const formatName = (fullName) => {
  const nameArray = fullName.split(" ")
  const formattedName = nameArray.map(
    (name) => name[0].toUpperCase() + name.substring(1).toLowerCase()
  )
  return formattedName.join(" ")
}

module.exports = formatName
