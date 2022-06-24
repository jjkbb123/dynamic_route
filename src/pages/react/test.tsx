import React, {
  ChangeEvent,
  InputHTMLAttributes,
  LegacyRef,
  Ref,
  RefObject,
  useRef,
} from 'react';
import { Button, Input, Upload } from 'antd';

const obj = {
  b: 123,
};
const testDefineData = {
  name: '',
  height: '',
  age: '',
};
const render = {
  renderDiv: () => {
    const inputRef: LegacyRef<Input> = useRef(null);
    const fileRef: LegacyRef<HTMLInputElement> = useRef(null);
    const hundleDefine = () => {
      for (let key in testDefineData) {
        Object.defineProperty(testDefineData, key, {
          get() {
            console.log(key, 'get');
          },
          set() {
            console.log(key, 'set');
          },
        });
      }
      testDefineData.name;
    };

    const onchange = () => {};

    return (
      <>
        <Input ref={inputRef} />
        <div className="">213123123</div>
        <Button onClick={hundleDefine}>button</Button>
        <Upload
          onChange={({ file }) => {
            const reader = new FileReader();
            reader.onload = function (e) {
              console.log(e);
            };
            reader.addEventListener('load', function (e) {
              console.log(e, 'eeeeee');
              console.log(reader, 2222);
            });
          }}
        >
          <Button>upload</Button>
        </Upload>
        <div
          style={{
            position: 'relative',
            margin: '30px 0',
          }}
        >
          <Button
            style={{
              position: 'absolute',
            }}
            onClick={() => {
              // console.log(fileRef.current!.click());
            }}
          >
            upload123
          </Button>
          <input
            type="file"
            style={{
              position: 'absolute',
              left: 200,
              // display: 'none'
            }}
            ref={fileRef}
            onChange={(event) => {
              var file = event.target.files[0];
              console.log(file, 111);

              var reader = new FileReader();
              reader.readAsArrayBuffer(file);
              reader.onload = function (event) {
                // 文件里的文本会在这里被打印出来
                // console.log(event.target.result)
                console.log(event.target.result);
                // const blob = new Blob(event.target!.result, { type: 'text/plain' })
                // console.log(blob);
              };
            }}
          />
        </div>
      </>
    );
  },
};

export default class Test extends React.Component {
  test = () => {
    this.setState(null);
  };

  init = () => {
    Object.defineProperty(obj, 'b', {
      get() {
        console.log('get b');
      },
      set(value) {
        console.log('set b value: ' + value);
      },
    });
  };
  static displayName: string;

  render() {
    this.init();
    console.log(this.props);

    return <render.renderDiv />;
  }
}
Test.displayName = 'jinpeng';
