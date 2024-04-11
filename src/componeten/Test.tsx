import { Link } from 'react-router-dom';
export default function test() {
  return(
    <div data-testid="Route-component">
        test
      <Link to="/test2">Go To Test1</Link>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78879.75922952998!2d5.750584625295135!3d51.842833144858446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c70867931be381%3A0xa48c71c89f257eac!2sNijmegen!5e0!3m2!1snl!2snl!4v1712750704636!5m2!1snl!2snl" width="600" height="450"  loading="lazy"></iframe>
    </div>
  )
}
