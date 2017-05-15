import React from 'react';
import Input, { InputProps } from './Input';

export type HTMLTextareaProps = React.HTMLProps<HTMLTextAreaElement>;

export default class Textarea extends React.Component<InputProps & HTMLTextareaProps, any> {
  render() {
    return <Input {...this.props as any} type="textarea" />;
  }
}
