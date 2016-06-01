angular.module('app')
  .filter('camelcase', () => (
      string => {
        const upperCamelCase = string
          .toLowerCase()
          .split(' ')
          .map(word => word[0].toUpperCase() + word.slice(1))
          .join('')

        return upperCamelCase[0].toLowerCase() + upperCamelCase.slice(1)
      }
    )
  )
