type BreadCrumb = {
  path: string;
  label: string;
}

export const breadCrumbUtils = (location: Location): BreadCrumb[] => {
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  const breadCrumbs: BreadCrumb[] = pathSegments.map((segment, index) => {
    const decodedSegment = decodeURIComponent(segment);
    const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
    let label = decodedSegment;
    if (decodedSegment === 'product') {
      label = 'Products';
    }
    return { path, label };
  });
  return breadCrumbs;
};
