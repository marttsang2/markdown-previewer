import styled from 'styled-components'

const MarkdownGuide = () => {
  const markdownCodes = [
    '# H1',
    '## H2',
    '### H3',
    '**bold**',
    '*italic*',
    '[Link](http://a.com)',
    '![Image](http://url/a.png)',
    '`inline code`',
    '```block code```',
    '- list item'
  ]
  return (
    <GuideContainer>
        <h2>Markdown Cheat Sheet</h2>
        <ul>
            {
                markdownCodes.map((code) => (
                    <li>{code}</li>
                ))
            }
        </ul>
    </GuideContainer>
  )
}

export default MarkdownGuide

const GuideContainer = styled.div`
    background-color: #eeeeee;
    border: 1px solid #dddddd;
    margin: 8px;
    padding: 12px 24px;

`