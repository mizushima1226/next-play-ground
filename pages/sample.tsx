import Link from 'next/link'
import { useState, ChangeEvent } from "react";
import Layout from '../components/Layout'

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Title } from '../components/Title'

const Sample = () => {
  const [ id, setId ] = useState("");
  const [ password, setPassword ] = useState("");

  const onChangeId = (e:ChangeEvent<HTMLInputElement>) =>  setId(e.target.value);
  const onChangePassword = (e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const onClickLogin = () => alert("login!!");
  
  return (
    <Layout title="MIZU SAMPLE">
    <Title>ログイン</Title>
    <form>
      <Input label="ID" value={id} onChange={onChangeId} />
      <Input label="パスワード" value={password} onChange={onChangePassword} />
      <Button onClick={onClickLogin}>ログイン</Button>
    </form>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
  )
}

export default Sample
