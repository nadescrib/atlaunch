import moment from "moment";

export function defaultDate(date?: string) {
  if (!date || !moment(date).isValid()) return "-";
  return moment(date).format("MMMM D, YYYY");
}

export function defaultDateTime(datetime?: string) {
  if (!datetime || !moment(datetime).isValid()) return "-";
  return moment(datetime).format("MMMM D, YYYY | h:mm A");
}

export function defaultTime(time?: string) {
  if (!time) return "-";

  const m = moment(time, "HH:mm:ss", true); // strict parsing
  if (!m.isValid()) return "-";

  return m.format("h:mm A");
}
