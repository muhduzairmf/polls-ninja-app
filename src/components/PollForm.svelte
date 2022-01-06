<script>
    import { fade } from "svelte/transition";
    import PollStore from "../store";
    import { createEventDispatcher } from "svelte";
    import Button from "./Button.svelte";

    const dispatch = createEventDispatcher()

    let fields = { question: '', answerA: '', answerB: '' };
    let errors = { question: '', answerA: '', answerB: '' };
    let isValid = false;

    const submitHandler = () => {
        isValid = true;

        // validate question
        if (fields.question.trim().length < 5) {
            isValid = false;
            errors.question = 'Question must be at least 5 characters';
        } else {
            errors.question = '';
        }

        // validate answer a
        if (fields.answerA.trim().length < 1) {
            isValid = false;
            errors.answerA = 'Answer must be at least 1 characters';
        } else {
            errors.answerA = '';
        }

        // validate answer b
        if (fields.answerB.trim().length < 1) {
            isValid = false;
            errors.answerB = 'Answer must be at least 1 characters';
        } else {
            errors.answerB = '';
        }

        // add new poll
        if (isValid) {
            let poll = {...fields, votesA: 0, votesB: 0, id: `${Math.floor(Date.now() * Math.random())}`};
            $PollStore = [poll, ...$PollStore];
            fields.question = '';
            fields.answerA = '';
            fields.answerB = '';
            dispatch('add');
        }
        
    };
</script>

<form on:submit|preventDefault={submitHandler} in:fade>
    <div class="form-field">
        <label for="question">Poll Question</label>
        <input type="text" id="question" bind:value={fields.question}>
        <div class="error">{errors.question}</div>
    </div>
    <div class="form-field">
        <label for="answer-1">Answer A</label>
        <input type="text" id="answer-1" bind:value={fields.answerA}>
        <div class="error">{errors.answerA}</div>
    </div>
    <div class="form-field">
        <label for="answer-2">Answer B</label>
        <input type="text" id="answer-2" bind:value={fields.answerB}>
        <div class="error">{errors.answerB}</div>
    </div>
    <Button>Add poll</Button>
</form>

<style>
    form {
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    .form-field {
        margin: 25px auto;
    }
    input {
        width: 100%;
        border-radius: 6px;
        border: 1px solid grey;
        height: 30px;
        padding: 4px 8px 4px 8px;
    }
    label {
        margin: 10px auto;
        text-align: left;
    }
    .error {
        color: #d91b42;
        font-size: 10px;
        font-weight: bold;
    }
</style>