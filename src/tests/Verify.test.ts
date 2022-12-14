/* eslint-disable @typescript-eslint/semi */
import chai from 'chai'
import chaiHttp from 'chai-http';
import { Response } from 'superagent'

import app from '../app'

chai.use(chaiHttp)

const { expect } = chai

describe('Teste da rota verify', () => {
  let chaiHttpResponse: Response;

  it('Deve retornar 200, noMach com array vazio ', async () => {
    chaiHttpResponse = await chai.request(app).post('/verify').send({
      user: 'user2',
      password: 'TesteSenhaForte!123&'
    })

    expect(chaiHttpResponse.status).to.equal(200)
    expect(chaiHttpResponse.body).to.be.deep.equal({
      verify: true,
      noMatch: []
    })
  })

  it('Deve retornar 404 se o tamanho da senha menor que 8', async () => {
    chaiHttpResponse = await chai.request(app).post('/verify').send({
      user: 'user2',
      password: 'Testes'
    })

    expect(chaiHttpResponse.status).to.equal(404)
    expect(chaiHttpResponse.body.noMatch).to.contains('minSize')
  })

  it('Deve retornar 404 se a senha tiver menos que 3 maiusculas', async () => {
    chaiHttpResponse = await chai.request(app).post('/verify').send({
      user: 'user2',
      password: 'Testes!123&'
    })

    expect(chaiHttpResponse.status).to.equal(404)
    expect(chaiHttpResponse.body.noMatch).to.be.deep.equal(['minUppercase'])
  })

  it('Deve retornar 404 se a senha tiver menos que 5 minusculas ', async () => {
    chaiHttpResponse = await chai.request(app).post('/verify').send({
      user: 'user2',
      password: 'TEStes!123&'
    })

    expect(chaiHttpResponse.status).to.equal(404)
    expect(chaiHttpResponse.body.noMatch).to.be.deep.equal(['minLowercase'])
  })

  it('Deve retornar 404 se a senha tiver menos que 5 minusculas ', async () => {
    chaiHttpResponse = await chai.request(app).post('/verify').send({
      user: 'user2',
      password: 'TEStes!123&'
    })

    expect(chaiHttpResponse.status).to.equal(404)
    expect(chaiHttpResponse.body.noMatch).to.be.deep.equal(['minLowercase'])
  })

  it('Deve retornar 404 se a senha tiver menos que 3 números ', async () => {
    chaiHttpResponse = await chai.request(app).post('/verify').send({
      user: 'user2',
      password: 'TesteSenhaForte!12&'
    })

    expect(chaiHttpResponse.status).to.equal(404)
    expect(chaiHttpResponse.body.noMatch).to.be.deep.equal(['minDigit'])
  })

  it('Deve retornar 404 se a senha tiver menos que 2 caracteres especiais ', async () => {
    chaiHttpResponse = await chai.request(app).post('/verify').send({
      user: 'user2',
      password: 'TesteSenhaForte!123'
    })

    expect(chaiHttpResponse.status).to.equal(404)
    expect(chaiHttpResponse.body.noMatch).to.be.deep.equal(['minSpecialChars'])
  })

  it('Deve retornar 404 se a senha não repete os caracteres', async () => {
    chaiHttpResponse = await chai.request(app).post('/verify').send({
      user: 'user2',
      password: 'TeesteSenhaForte!123$'
    })

    expect(chaiHttpResponse.status).to.equal(404)
    expect(chaiHttpResponse.body.noMatch).to.be.deep.equal(['noRepeted'])
  })

  it('Deve retornar 404 concatenando os erros', async () => {
    chaiHttpResponse = await chai.request(app).post('/verify').send({
      user: 'user2',
      password: 'Teste!12'
    })

    expect(chaiHttpResponse.status).to.equal(404)
    expect(chaiHttpResponse.body.noMatch).to.be.deep.equal(['minUppercase',
      'minLowercase',
      'minDigit',
      'minSpecialChars'])
  })
})
