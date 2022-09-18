export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        options.map(key => (
          <button key={key} onClick={() => onLeaveFeedback(key)}>{key}</button>
        ))
    );
}