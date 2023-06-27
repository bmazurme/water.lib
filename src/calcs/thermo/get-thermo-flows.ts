import { index, getQMidOrMax } from '../../utils';

export default function getThermoFlows(qht: number, qhhr: number, th: number, tc: number, qht2: number) {
  const qmid = getQMidOrMax(qht, th, tc, qht2);
  const qmax = getQMidOrMax(qhhr, th, tc, qht2);

  const qmidg = index(qmid);
  const qmaxg = index(qmax);

  return { qmid, qmax, qmidg, qmaxg };
}
