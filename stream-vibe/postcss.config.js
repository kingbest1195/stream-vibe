import postcssPxToRem from "postcss-pxtorem"
import postcssPresetEnv from "postcss-preset-env" /* use for old browsers */

export default ({ env }) => {
  const isProd = env === "production"
  const plugins = []

  if (isProd) {
    plugins.push(
      postcssPxToRem({
        propList: ["*"],
        mediaQuery: true,
      })
    )

    plugins.push(postcssPresetEnv())
  }

  return {
    plugins,
  }
}
