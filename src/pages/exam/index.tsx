import type { ReactElement, FC } from 'react'
import { useState } from 'react'
import { Form, Radio, RadioChangeEvent, Button, Col, Checkbox, Space } from 'antd'

import { radioExam } from './exam'

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 6 },
};

const randomExam = () => {
    let arr: number[] = [];
    for (let i = 0; i < 60; i++) {
        const randomCount = Math.floor(Math.random() * 60)
        if (arr.find(item => item === randomCount)) {
            continue;
        }
        if (arr.length > 14) {
            break;
        }
        arr.push(randomCount)
    }
    return arr.map(index => radioExam[index])
}
const Exam: FC<{}> = (): ReactElement => {

    const [radioAnwser, setRadioAnwser] = useState(false);
    const [radioOptionExam, setRadioOptionExam] = useState(randomExam);

    const onChange = (e: RadioChangeEvent) => {
        setRadioAnwser(e.target.value)
    }

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    const randomRadioExam = () => setRadioOptionExam(randomExam)

    return (
        <div className="exam-radio">
            <Form
                onFinish={onFinish}
                {...formItemLayout}
                validateTrigger={radioOptionExam.map(item => item.title)}
            >
                {radioOptionExam.map((item, index) => {
                    return (
                        <FormItem
                            label={<span className="exam-radio-option">{index + 1}、{item.title}</span>}
                            name={item.title}
                            validateTrigger={item.title}
                            rules={[
                                { 
                                    required: false, 
                                    /* type: "enum",
                                    enum: [...item.answer], */
                                    validator: (rule, value) => {
                                        if(Array.isArray(value)) {
                                            if(value.join('') !== item.answer) {
                                                return Promise.reject(`答案错误!`)
                                            }
                                            return Promise.resolve('success!');
                                        }
                                        if(value !== item.answer) {
                                            return Promise.reject(`答案错误!`)
                                        }
                                        return Promise.resolve('success!');
                                    }
                                }
                            ]}
                        >
                            {
                                item.type !== "CHECKBOX"
                                ?
                                <Radio.Group>
                                    {item.options.map(oItem => {
                                        return <Radio value={oItem.key} key={oItem.key}>{`${oItem.key}.${oItem.value}`}</Radio>
                                    })}
                                </Radio.Group>
                                :
                                <Checkbox.Group>
                                    {item.options.map(oItem => {
                                        return <Checkbox value={oItem.key} key={oItem.key}>{`${oItem.key}.${oItem.value}`}</Checkbox>
                                    })}
                                </Checkbox.Group>
                            }
                            
                        </FormItem>
                    )
                })}
                <FormItem
                    wrapperCol={{ span: 18, offset: 9 }}
                >
                    <Space size="large">
                        <Button type="primary" htmlType="submit">提交</Button>
                        <Button onClick={randomRadioExam}>重置</Button>
                    </Space>
                </FormItem>
            </Form>
            <style>
                {
                    `
                        .exam-radio {
                            background: #f2e38d;
                            border: 15px solid #101010;
                        }
                        .exam-radio-option {
                            font-weight: 700;
                            font-size: 15px;
                            white-space: break-spaces;
                            height: 60px;
                        }
                    `
                }
            </style>
        </div>
    )
}
export default Exam;