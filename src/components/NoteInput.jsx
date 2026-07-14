import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // [Basic] kelola nilai title sebagai controlled input.
      title: '',
      // [Basic] kelola nilai body sebagai controlled textarea.
      body: '',
      // [Advanced] state untuk pesan error validasi.
      errorMessage: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    // [Basic] update state dengan nilai event.target.value.
    // [Skilled] batasi judul maksimal 50 karakter menggunakan state (bukan maxLength attribute).
    const value = event.target.value;
    if (value.length <= 50) {
      this.setState({ title: value });
    }
  }

  onBodyChangeEventHandler(event) {
    // [Basic] update state body agar textarea menjadi controlled component.
    this.setState({ body: event.target.value, errorMessage: '' });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    const { title, body } = this.state;

    // [Advanced] tolak submit ketika body kurang dari 10 karakter dan tampilkan pesan error.
    if (body.length < 10) {
      this.setState({ errorMessage: 'Isi catatan minimal harus 10 karakter' });
      return;
    }

    // [Basic] panggil props.addNote dengan data title & body dari state, lalu reset form.
    this.props.addNote({ title, body });
    this.setState({ title: '', body: '', errorMessage: '' });
  }

  render() {
    // [Skilled] hitung sisa karakter jika menerapkan limit 50 karakter.
    const remainingChars = 50 - this.state.title.length;

    return (
      <div className="note-input" data-testid="note-input">
        <h2>Buat catatan</h2>

        {/* [Advanced] tampilkan pesan error menggunakan elemen dengan class note-input__feedback--error. */}
        {this.state.errorMessage && (
          <p className="note-input__feedback--error">
            {this.state.errorMessage}
          </p>
        )}

        <form
          onSubmit={this.onSubmitEventHandler}
          data-testid="note-input-form"
        >
          {/* [Skilled] tampilkan sisa karakter secara dinamis ketika limit judul diterapkan */}
          <p
            className={`note-input__title__char-limit${remainingChars < 10 ? ' note-input__title__char-limit--warn' : ''}`}
            data-testid="note-input-title-remaining"
          >
            Sisa karakter: {remainingChars}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            required
            data-testid="note-input-title-field"
          />
          <textarea
            className="note-input__body"
            placeholder="Tuliskan catatanmu di sini ..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            required
            data-testid="note-input-body-field"
          />
          <button type="submit" data-testid="note-input-submit-button">
            Buat
          </button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
