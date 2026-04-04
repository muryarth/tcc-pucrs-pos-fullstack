export type Month = { title: string; number: string };

/** Array contendo os 12 meses do ano em português */
const MONTHS: Month[] = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
].map((title, i) => ({ title, number: String(i + 1).padStart(2, "0") }));

const dateBR = {
  /** Converte uma string "dd/mm/aaaa" em um objeto Date do JS */
  parse(value: string): Date {
    const [day, month, year] = value.split("/").map(Number);
    return new Date(year, month - 1, day);
  },

  /** Converte um objeto Date em string "dd/mm/aaaa". Com `showTime: true`, retorna "dd/mm/aaaa - hh:mm:ss" */
  format(value: Date, options?: { showTime?: boolean }): string {
    const pad = (n: number) => String(n).padStart(2, "0");
    const datePart = `${pad(value.getDate())}/${pad(value.getMonth() + 1)}/${value.getFullYear()}`;
    const timePart = `${pad(value.getHours())}:${pad(value.getMinutes())}:${pad(value.getSeconds())}`;
    return options?.showTime ? `${datePart} - ${timePart}` : datePart;
  },
};

const monthsBR = {
  /** Retorna o array completo com os 12 meses do ano */
  getAll(): Month[] {
    return MONTHS;
  },

  /** Busca um mês pelo índice (0-based), pelo número ("01"…"12") ou pelo nome (case-insensitive) */
  find(query: string | number): Month | undefined {
    return typeof query === "number"
      ? MONTHS[query]
      : MONTHS.find(
          (m) =>
            m.title.toLowerCase() === query.toLowerCase() || m.number === query,
        );
  },
};

export { dateBR, monthsBR };
