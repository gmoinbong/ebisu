export const breadCrumbUtils = (location: any) => {
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '')
  const breadCrumbs = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join('/')}`
    let label = segment;
    if (segment === 'product') {
      label = 'All Products';
    }
    return { path, label }
  })
  return breadCrumbs
}
