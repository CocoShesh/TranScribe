export const countWords = (count: string) => {
  if (count.length === 0) {
    return 0;
  } else {
    count = count.replace(/(^\s*)|(\s*$)/gi, "");
    count = count.replace(/[ ]{2,}/gi, " ");
    count = count.replace(/\n /, "\n");
    return count.split(" ").length;
  }
};

export const copyText = (transcript: string): void => {
  navigator.clipboard.writeText(transcript);
};

export const downloadTranscript = (text: string) => {
  const element = document.createElement("a");
  const file = new Blob([text], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = "transcript.txt";
  document.body.appendChild(element);
  element.click();
};
