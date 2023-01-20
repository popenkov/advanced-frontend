import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
  // порядок лоадеров имеет значение, поэтому лучше выносить так в переменные
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [typescriptLoader];
}
