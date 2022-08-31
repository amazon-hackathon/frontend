import React, { useState, useEffect, FormEvent } from 'react';
import Layout from '@theme/Layout';
import axios from 'axios';
import styles from './index.module.css'
import useBaseUrl from '@docusaurus/useBaseUrl';

class ClickHandler {
  private route = "https://foodwaste-web.herokuapp.com/services/"

  async seedClick(): Promise<any> {
    const { data } = await axios.get(`${this.route}get-all?service=seed`);
    return data;
  }

  async landClick(): Promise<any> {
    const { data } = await axios.get(`${this.route}get-all?service=land`);
    return data;
  }

  async wasteClick(): Promise<any> {
    const { data } = await axios.get(`${this.route}get-all?service=waste`);
    return data;
  }

  async handleSubmit(form: any) {
    await axios.post(`${this.route}add-service`, form);
  }
}

export default function Solutions() {
  const [solution, setSolution] = useState([])
  const [selected, setSelected] = useState("seeds");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone_number: "",
    service_type: "seed",
    description: ""
  })
  useEffect(() => {
    (
      async () => setSolution(await clickHandler.seedClick())
    )();
  }, [])
  const clickHandler = new ClickHandler();
  return (
    <Layout>
      <div className={styles.ourSolution}>
        <h1 className={styles.solutionTitle}>Our Solution</h1>
        <img className={styles.solutionImage} src={useBaseUrl("/img/flower.png")} alt="flower" />
        <p className={styles.solutionText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse incidunt in hic aliquam voluptatibus dolorum nemo iusto delectus amet, inventore minus consectetur repellendus veritatis? Ipsam quos, maxime explicabo officia iste incidunt nesciunt totam voluptas harum debitis voluptates perferendis vero officiis est deserunt ad expedita, veritatis provident, delectus tempora autem eligendi sed. Eaque molestiae nisi autem cumque neque facilis quisquam labore minus asperiores necessitatibus. Obcaecati totam tempore dolores ad vero recusandae error accusamus, veniam quo sint natus sapiente, sed consequatur quasi sequi est! Quisquam eaque blanditiis dolor! At aspernatur soluta sunt reprehenderit repellat excepturi sed quasi. Voluptates nesciunt totam quidem fugiat?</p>
        <img className={styles.solutionImage1} src={useBaseUrl("/img/flower.png")} alt="flower" />
        <button onClick={() => document.getElementById("form").scrollIntoView()} className={styles.solutionBtn}>Add to the Community</button>
      </div>
      <div id="form" />
      <div className={styles.solutionFormCont}>
        <img className={styles.solutionImage2} src={useBaseUrl("/img/eggs.png")} alt="flower" />
        <img className={styles.solutionImage3} src={useBaseUrl("/img/wisk.png")} alt="flower" />
        <img className={styles.solutionImage4} src={useBaseUrl("/img/drumsticks.png")} alt="flower" />
        <form className={styles.solutionForm}>
          <h1>Join our comminity!</h1>
          <label className={styles.formLabel}>
            First Name:
            <input className={styles.inputBox} type="text" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
          </label>
          <label className={styles.formLabel}>
            Last Name:
            <input className={styles.inputBox} type="text" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
          </label>
          <label className={styles.formLabel}>
            Email:
            <input className={styles.inputBox} type="text" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </label>
          <label className={styles.formLabel}>
            Phone Number:
            <input className={styles.inputBox} type="text" value={form.phone_number} onChange={(e) => setForm({ ...form, phone_number: e.target.value })} />
          </label>
          <select className={styles.formSelection} onChange={(e) => setForm({ ...form, service_type: e.target.value })}>
            <option value="seed">Seeds</option>
            <option value="land">Land for a Garden</option>
            <option value="waste">Food Waste Hotspot</option>
          </select>
          <textarea placeholder="Description" rows={8} cols={35} className={styles.formArea} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          <button onClick={async (e) => {
            e.preventDefault();
            if (form.firstName == "" || form.lastName == "" || form.email == "" || form.phone_number == "" || form.description == "") {
              window.alert("All areas must be filled before submitting.")
              return
            }
            await clickHandler.handleSubmit(form)
            setForm({
              firstName: "",
              lastName: "",
              email: "",
              phone_number: "",
              service_type: "seed",
              description: ""
            })
          }}>Submit</button>
        </form>
      </div>
      <div className={styles.showCont}>
        <div className={styles.showBtnCont}>
          <button style={{ backgroundColor: selected == "seeds" ? "rgba(207, 207, 207, 0.534)" : "rgb(207, 207, 207)" }} className={styles.showBtn} onClick={async () => {
            setSelected("seeds");
            setSolution(await clickHandler.seedClick())
          }}>Seeds</button>
          <button style={{ backgroundColor: selected == "land" ? "rgba(207, 207, 207, 0.534)" : "rgb(207, 207, 207)" }} className={styles.showBtn} onClick={async () => {
            setSelected("land");
            setSolution(await clickHandler.landClick())
          }}>Land for a Garden</button>
          <button style={{ backgroundColor: selected == "waste" ? "rgba(207, 207, 207, 0.534)" : "rgb(207, 207, 207)" }} className={styles.showBtn} onClick={async () => {
            setSelected("waste");
            setSolution(await clickHandler.wasteClick())
          }}>Food Waste Hotspot</button>
        </div>
        <div className={styles.cardCont}>
          {solution.map((val) => {
            console.log(val)
            return (
              <div className={styles.card}>
                <img style={{ marginTop: "30px", width: "27vw" }} src={selected == "seeds" ? useBaseUrl("/img/seeds.png") : selected == "land" ? useBaseUrl("/img/land.png") : useBaseUrl("/img/waste.png")} alt="" />
                <h3 style={{ marginTop: "30px" }}>{val.firstName} {val.lastName}</h3>
                <h3 style={{ marginTop: "30px" }}>{val.email}</h3>
                <h3 style={{ marginTop: "30px" }}>{val.phone_number}</h3>
                <p style={{ marginTop: "30px" }}>{val.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  );
}
