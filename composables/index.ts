export const useCounterState = () => useState<number>('count', () => 0)
// カウンターの数値を保持するように実装