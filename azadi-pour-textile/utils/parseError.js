const parseError = (error) => {
    let final = '';
    if (error.includes('0x00000')) {
        final += 'مقدار وارد شده نا معتبر است.';
    }
    if (error.includes('0x00001')) {
        final += 'مقدار وارد شده تکراری است.';
    }
    if (error.includes('0x00002')) {
        final += 'مقدار وارد شده نا معتبر است.';
    }
    if (error.includes('0x00003')) {
        final += 'مقدار وارد شده برای ورود نا معتبر است.';
    }
    if (error.includes('0x00004')) {
        final += 'زمان اعتبار توکن شما گذشته است.';
    }
    if (error.includes('0x00005')) {
        final += 'اتفاقی رخ داده لطفا دوباره امتحان کنید.';
    }
    if (error.includes('0x00006')) {
        final += 'پست الکترونیکی اجباری هست.';
    }
    if (error.includes('0x00007')) {
        final += 'پست الکترونیکی معتبر نیست.';
    }
    if (error.includes('0x00008')) {
        final += 'رمز عبور اجباری هست.';
    }
    if (error.includes('0x00009')) {
        final += 'رمز عبور نا معتبر است.';
    }
    if (error.includes('0x0000A')) {
        final += 'جایگاه وارد شده نادرست است.';
    }
    if (error.includes('0x0000B')) {
        final += 'هیچ داده ای با ای دی داده شده موجود نیست.';
    }
    if (error.includes('0x0000C')) {
        final += 'هیچ توکنی وارد نشده.';
    }
    if (error.includes('0x0000D')) {
        final += 'صاحب توکن دیگه وجود نداره.';
    }
    if (error.includes('0x0000E')) {
        final += 'رمز عبور بعد از ساخت توکن عوض شده.';
    }
    if (error.includes('0x0000F')) {
        final += 'اجازه انجام این عملیات رو ندارین.';
    }
    if (error.includes('0x00010')) {
        final += 'پست الکترونیک یا رمز عبور نا معتبر است.';
    }
    if (error.includes('0x00011')) {
        final += 'پست الکترونیک یا رمز عبور نا معتبر است.';
    }

    if (!final) {
        return 'اتفاقی رخ داده لطفا دوباره امتحان کنید.';
    }

    return final;
};

export default parseError;