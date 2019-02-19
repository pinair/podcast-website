--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.5
-- Dumped by pg_dump version 9.6.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: authors; Type: TABLE; Schema: public; Owner: riccardosibani
--

CREATE TABLE authors (
    id integer NOT NULL,
    name character varying(40) NOT NULL,
    surname character varying(40),
    description text,
    pic text,
    facebook text,
    instagram text,
    twitter text,
    linkedin text,
    reddit text,
    active boolean
);


ALTER TABLE authors OWNER TO riccardosibani;

--
-- Name: authors_id_seq; Type: SEQUENCE; Schema: public; Owner: riccardosibani
--

CREATE SEQUENCE authors_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE authors_id_seq OWNER TO riccardosibani;

--
-- Name: authors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: riccardosibani
--

ALTER SEQUENCE authors_id_seq OWNED BY authors.id;


--
-- Name: blob; Type: TABLE; Schema: public; Owner: riccardosibani
--

CREATE TABLE blob (
    id integer NOT NULL,
    number integer,
    title text NOT NULL,
    description text NOT NULL,
    date timestamp without time zone,
    content_length bigint,
    blog text,
    video_src text,
    audio_src text,
    background_image text
);


ALTER TABLE blob OWNER TO riccardosibani;

--
-- Name: blob_id_seq; Type: SEQUENCE; Schema: public; Owner: riccardosibani
--

CREATE SEQUENCE blob_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE blob_id_seq OWNER TO riccardosibani;

--
-- Name: blob_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: riccardosibani
--

ALTER SEQUENCE blob_id_seq OWNED BY blob.id;


--
-- Name: authors id; Type: DEFAULT; Schema: public; Owner: riccardosibani
--

ALTER TABLE ONLY authors ALTER COLUMN id SET DEFAULT nextval('authors_id_seq'::regclass);


--
-- Name: blob id; Type: DEFAULT; Schema: public; Owner: riccardosibani
--

ALTER TABLE ONLY blob ALTER COLUMN id SET DEFAULT nextval('blob_id_seq'::regclass);


--
-- Data for Name: authors; Type: TABLE DATA; Schema: public; Owner: riccardosibani
--

COPY authors (id, name, surname, description, pic, facebook, instagram, twitter, linkedin, reddit, active) FROM stdin;
1	Riccardo	Sibani	Blockchain Developer	https://pbs.twimg.com/media/Dtaj8PXW0AAx3k4.jpg	\N	https://www.instagram.com/pina_air/	\N	\N	\N	t
2	Filippo	Boiani	Party developer	https://avatars1.githubusercontent.com/u/17007951?s=460&v=4	\N	https://www.instagram.com/filippoboiani/	\N	\N	\N	t
3	Nicola	Lo Caso	SAP developer	https://media.licdn.com/dms/image/C5603AQEZssasBPPSWw/profile-displayphoto-shrink_200_200/0?e=1552521600&v=beta&t=k_bfpu9MiAeP0WgEBWZOteJY8zjvmci1Fdi9dkAUI2k	\N	https://www.instagram.com/nicklocaso/	\N	\N	\N	t
\.


--
-- Name: authors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: riccardosibani
--

SELECT pg_catalog.setval('authors_id_seq', 3, true);


--
-- Data for Name: blob; Type: TABLE DATA; Schema: public; Owner: riccardosibani
--

COPY blob (id, number, title, description, date, content_length, blog, video_src, audio_src, background_image) FROM stdin;
1	1	Una giornata al mare	C'era bel tempo	2019-02-19 19:24:39.645956	3480	<h1>Fillo Gay</h1>	\N	assets/audio/Episode1.mp3	assets/img/backgrounds/Background1.jpeg
\.


--
-- Name: blob_id_seq; Type: SEQUENCE SET; Schema: public; Owner: riccardosibani
--

SELECT pg_catalog.setval('blob_id_seq', 1, true);


--
-- Name: authors authors_pkey; Type: CONSTRAINT; Schema: public; Owner: riccardosibani
--

ALTER TABLE ONLY authors
    ADD CONSTRAINT authors_pkey PRIMARY KEY (id);


--
-- Name: blob blob_number_key; Type: CONSTRAINT; Schema: public; Owner: riccardosibani
--

ALTER TABLE ONLY blob
    ADD CONSTRAINT blob_number_key UNIQUE (number);


--
-- Name: blob blob_pkey; Type: CONSTRAINT; Schema: public; Owner: riccardosibani
--

ALTER TABLE ONLY blob
    ADD CONSTRAINT blob_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

