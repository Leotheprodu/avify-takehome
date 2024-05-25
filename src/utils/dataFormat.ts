export const formatNumber = (number: number) => {
  return new Intl.NumberFormat("es-CR", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(number);
};

export const formatDate = (date: string): string => {
  const dateObject = new Date(date);

  const day = String(dateObject.getUTCDate()).padStart(2, "0");
  const month = String(dateObject.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based, hence +1
  const year = dateObject.getUTCFullYear();

  return `${month}-${day}-${year}`;
};
