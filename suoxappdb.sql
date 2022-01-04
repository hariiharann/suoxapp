--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

-- Started on 2021-12-28 03:07:19

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3323 (class 1262 OID 16396)
-- Name: suoxappdb; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE suoxappdb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';


ALTER DATABASE suoxappdb OWNER TO postgres;

\connect suoxappdb

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 24594)
-- Name: oxygen_info; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.oxygen_info (
    patient_id integer NOT NULL,
    oxygen_value character varying(255),
    month character varying(255),
    date date,
    bpm character varying(255),
    "time" time without time zone
);


ALTER TABLE public.oxygen_info OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 24593)
-- Name: oxygen_info_patient_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.oxygen_info_patient_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.oxygen_info_patient_id_seq OWNER TO postgres;

--
-- TOC entry 3324 (class 0 OID 0)
-- Dependencies: 209
-- Name: oxygen_info_patient_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.oxygen_info_patient_id_seq OWNED BY public.oxygen_info.patient_id;


--
-- TOC entry 212 (class 1259 OID 24603)
-- Name: sugar_info; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sugar_info (
    patient_id integer NOT NULL,
    sugar_value character varying(255),
    month character varying(255),
    date date,
    "time" time without time zone
);


ALTER TABLE public.sugar_info OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 24602)
-- Name: sugar_info_patient_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sugar_info_patient_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sugar_info_patient_id_seq OWNER TO postgres;

--
-- TOC entry 3325 (class 0 OID 0)
-- Dependencies: 211
-- Name: sugar_info_patient_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sugar_info_patient_id_seq OWNED BY public.sugar_info.patient_id;


--
-- TOC entry 3169 (class 2604 OID 24597)
-- Name: oxygen_info patient_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.oxygen_info ALTER COLUMN patient_id SET DEFAULT nextval('public.oxygen_info_patient_id_seq'::regclass);


--
-- TOC entry 3170 (class 2604 OID 24606)
-- Name: sugar_info patient_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sugar_info ALTER COLUMN patient_id SET DEFAULT nextval('public.sugar_info_patient_id_seq'::regclass);


--
-- TOC entry 3315 (class 0 OID 24594)
-- Dependencies: 210
-- Data for Name: oxygen_info; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.oxygen_info (patient_id, oxygen_value, month, date, bpm, "time") VALUES (7, '95', 'december', '2021-12-12', '130/55', '06:52:00');
INSERT INTO public.oxygen_info (patient_id, oxygen_value, month, date, bpm, "time") VALUES (8, '94', 'december', '2021-12-22', '150/63', '02:00:00');
INSERT INTO public.oxygen_info (patient_id, oxygen_value, month, date, bpm, "time") VALUES (1, '100', 'december', '2021-12-05', '120/63', '05:00:00');
INSERT INTO public.oxygen_info (patient_id, oxygen_value, month, date, bpm, "time") VALUES (9, '99', 'december', '2021-12-24', '180/63', '12:00:00');


--
-- TOC entry 3317 (class 0 OID 24603)
-- Dependencies: 212
-- Data for Name: sugar_info; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.sugar_info (patient_id, sugar_value, month, date, "time") VALUES (2, '300', 'december', '2021-12-17', '10:00:00');
INSERT INTO public.sugar_info (patient_id, sugar_value, month, date, "time") VALUES (4, '100', 'december', '2021-12-26', '04:00:00');
INSERT INTO public.sugar_info (patient_id, sugar_value, month, date, "time") VALUES (1, '250', 'december', '2021-12-15', '09:00:00');


--
-- TOC entry 3326 (class 0 OID 0)
-- Dependencies: 209
-- Name: oxygen_info_patient_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.oxygen_info_patient_id_seq', 9, true);


--
-- TOC entry 3327 (class 0 OID 0)
-- Dependencies: 211
-- Name: sugar_info_patient_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sugar_info_patient_id_seq', 4, true);


--
-- TOC entry 3172 (class 2606 OID 24601)
-- Name: oxygen_info oxygen_info_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.oxygen_info
    ADD CONSTRAINT oxygen_info_pkey PRIMARY KEY (patient_id);


--
-- TOC entry 3174 (class 2606 OID 24610)
-- Name: sugar_info sugar_info_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sugar_info
    ADD CONSTRAINT sugar_info_pkey PRIMARY KEY (patient_id);


-- Completed on 2021-12-28 03:07:19

--
-- PostgreSQL database dump complete
--

