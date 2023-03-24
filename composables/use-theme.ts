export default function () {
  const colorMode = useColorMode()

  const colorPreferences = ['light', 'dark', 'system']
  const isDark = computed(() => colorMode.value === 'dark')

  const icon: Record<string, string> = {
    dark: 'mdi:weather-night',
    light: 'mdi:weather-sunny',
    system: 'mdi:laptop',
  }

  const getIcon = computed(() => icon[colorMode.preference])

  const toggleDarkMode = () => {
    const nextColorMode = (colorPreferences.indexOf(colorMode.preference) + 1) % colorPreferences.length

    // if the next color mode is system, we need to check if the user has a system preference
    if (nextColorMode === colorPreferences.length - 1) {
    // if the user has a system preference, use that
      if (window.matchMedia('(prefers-color-scheme: dark)').matches)
        colorMode.preference = 'dark'
      else
        colorMode.preference = 'light'
    }

    colorMode.preference = colorPreferences[nextColorMode]
  }

  return { colorMode, isDark, toggleDarkMode, getIcon }
}
