import { Result, Button } from 'antd';
import LocalizedStrings from 'react-localization';
import locales from './error-page.locale';

const strings = new LocalizedStrings(locales);

function Error() {
  return (
    <Result
      status="404"
      title="404"
      subTitle={strings.subTitle}
      extra={
        <Button href="/search" type="primary">
          {strings.button}
        </Button>
      }
    />
  );
}

export default Error;
