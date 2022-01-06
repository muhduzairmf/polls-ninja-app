import { writable } from "svelte/store";

const PollStore = writable(
    [
        {
          id: '9246681',
          question: 'Python or JavaScript',
          answerA: 'Python',
          answerB: 'JavaScript',
          votesA: 9,
          votesB: 17
        }
    ]
);

export default PollStore;
