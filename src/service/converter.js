import marked from 'marked';

const addGithubTaskListStyling = function (str) {  
    str = str.toString();
    
    if (str.match(/<li><input.*<\/li>/gi)) {
        str = str.replace(/(<li>)(<input.*<\/li>)/gi,
          `<li style="list-style-type: none;">$2`);
      }
    return str
  }

const markdownConverterService = (inputValue, gfmMode)=>{
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: gfmMode,
    });

    if(gfmMode)
    return addGithubTaskListStyling(marked(inputValue));
    else
    return marked(inputValue);

}

export default markdownConverterService;