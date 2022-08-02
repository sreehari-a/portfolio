import React, { useEffect } from "react";
import stylize from "../../../utils/stylize";
import styles from "./styles";
import { Row, Col, Input, Button } from "antd";
import Message from "../../../types/message";
import { CloseOutlined, SendOutlined } from "@ant-design/icons";
const { TextArea } = Input;

type Props = {
  classes: any;
  loading: boolean;
  fetchContent: Function;
};

function MessageForm(props: Props) {
  const { classes, loading, fetchContent } = props;
  const [messageForm, setMessageForm] = React.useState<Message | null>(null);
  const [isFormValid, setIsFormValid] = React.useState<boolean>(false);
  useEffect(() => {
    const isValid = !!(
      messageForm?.email &&
      messageForm?.message &&
      messageForm?.name &&
      messageForm?.phoneNo
    );
    if (isValid !== isFormValid) {
      setIsFormValid(isValid);
    }
  }, [messageForm]);
  const updateForm = (event: any) => {
    const { target: { id = "", value = "" } = {} } = event;
    const updatedForm: Message | null = { ...messageForm, [id]: value };
    id && setMessageForm(updatedForm);
  };
  const resetForm = () => {
    setMessageForm({});
  };
  const submitForm = () => {
    fetchContent(messageForm);
  };
  return (
    <div className={`${classes.formWrapper}`}>
      <Row>
        <Col span={12}>
          <Input
            id="name"
            value={messageForm?.name}
            onChange={updateForm}
            placeholder="User Name"
          />
        </Col>
        <Col span={12}>
          <Input
            id="email"
            value={messageForm?.email}
            onChange={updateForm}
            placeholder="Email"
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Input
            id="phoneNo"
            value={messageForm?.phoneNo}
            onChange={updateForm}
            placeholder="Phone Number"
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <TextArea
            rows={4}
            id="message"
            value={messageForm?.message}
            onChange={updateForm}
            placeholder="Message"
          />
        </Col>
      </Row>
      <Row justify="end" gutter={6}>
        <Button
          type="primary"
          shape="round"
          icon={<CloseOutlined />}
          size={"large"}
          onClick={resetForm}
        >
          Cancel
        </Button>
        <Button
          type="primary"
          shape="round"
          icon={<SendOutlined />}
          size={"large"}
          onClick={submitForm}
          disabled={!isFormValid}
          loading={loading}
        >
          Post Message
        </Button>
      </Row>
    </div>
  );
}
export default stylize(MessageForm, styles);
