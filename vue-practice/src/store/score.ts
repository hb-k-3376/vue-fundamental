import type { InjectionKey, Ref } from 'vue';

// 타입 정의
export type ScoreContext = {
  score: Ref<number>;
  comment: Ref<string>;
  updateScore: (v: number) => void;
  updateComment: (v: string) => void;
};

// key 정의
export const SCORE_KEY: InjectionKey<ScoreContext> = Symbol('score_key');
