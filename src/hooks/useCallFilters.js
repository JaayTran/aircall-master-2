export default function useCallFilters() {
  const filterByArchived = (calls) => {
    return calls.filter((call) => {
      return call.is_archived;
    });
  };

  const filterByNotArchived = (calls) => {
    return calls.filter((call) => {
      return !call.is_archived;
    });
  };

  return { filterByArchived, filterByNotArchived };
}
