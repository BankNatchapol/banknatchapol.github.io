declare module '*.mdx' {
  const Component: React.ComponentType<{ components?: Record<string, React.ComponentType> }>
  export default Component
}
