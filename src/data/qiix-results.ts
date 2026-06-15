// Real experimental data from https://github.com/BankNatchapol/QIMX
// eval_interval = 10, so x = 0, 10, 20, ..., 140

const X_LABELS = ['0','10','20','30','40','50','60','70','80','90','100','110','120','130','140']

// NEQR encoding: without mixer vs. with QFT mixer
export const neqrTestLoss = {
  labels: X_LABELS,
  series: [
    {
      label: 'Without mixer',
      data: [0.7502, 0.6564, 0.6058, 0.5765, 0.5543, 0.5367, 0.5229, 0.5130, 0.5065, 0.5020, 0.4987, 0.4959, 0.4924, 0.4881, 0.4826],
    },
    {
      label: 'With QFT mixer',
      data: [0.6950, 0.6101, 0.5707, 0.5456, 0.5255, 0.5116, 0.5033, 0.4975, 0.4918, 0.4862, 0.4813, 0.4765, 0.4716, 0.4670, 0.4637],
    },
  ],
}
